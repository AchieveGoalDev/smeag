import { GOOGLE_EMAIL } from '$env/static/private'
import transporter from './emailConfig.server.js'

type FormItem = { name: string, value: string }

function processFormData(iterator) {
    const formItems: FormItem[] = []

    for (const entry of iterator) {
        formItems.push(
            {
                name: entry[0],
                value: entry[1]
            }
        )
    }

    return formItems
}

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const formItems: FormItem[] = processFormData(formData.entries())
            console.log(formItems)
            const formBody = formItems.map(item => `<p>${item.name}</p><p>${item.value}</p>`)
            console.log(formBody)
            const html = `<h2>ホームページからお問い合わせリクエストは以下の通りです。</h2><pre>${formBody.join("")}</pre>`;

            const message = {
                from: GOOGLE_EMAIL,
                to: "justin.smith@achievegoal.jp",
                subject: `TEST`,
                text: formBody.join(""),
                html: html,
            };

            //@ts-expect-error goaway
            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};