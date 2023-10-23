export function validateVoid(value: string | never[], valueTwo = "") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    valueTwo = ""
    value = []
    return value
}

export function validateIsRequired(value: string) {
    const errors = [];

    if (!value) {
        errors.push("必要項目です");
    }

    return errors
}

export function validate英字名(name: string) {
    const errors: string[] = [];
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;
    if (name) {
        const nameArray = name.split("");
        nameArray.forEach((letter) => {
            if (!letter.match(letterRegex)) {
                isLetters = false;
            }
        });
    }

    if (!isLetters) {
        errors.push("半角ロマジで入力してください");
    }

    if (!name) {
        errors.push("必要項目です");
    }
    return errors;
}

export function validate学籍番号(stNumber: string) {
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    const fullSpaceRegex = new RegExp("^[^ -~｡-ﾟ]+$");

    const errors: string[] = [];
    if (stNumber) {
        const stringArray = stNumber.split("");
        let hasFull = false;

        stringArray.forEach((letter) => {
            if (letter.match(fullSpaceRegex)) {
                hasFull = true;
            }
        });

        if (hasFull) {
            errors.push("半角文字で入力してください");
        }

        if (stringArray[0].match(letterRegex)) {
            errors.push("学籍番号はアルファベットから始まることはありません");
        }

        if (stringArray.length < 10 && stringArray.length > 0) {
            errors.push("10文字以上にしてください");
        }
    } else if (!stNumber) {
        errors.push("必要項目です");
    }
    return errors;
};

export function validateフリガナデータ(name: string) {
    const errors: string[] = [];
    const カタカナ = new RegExp("^[\u30A0-\u30FF]+$");
    const space = new RegExp("　+");
    let isKana = true;

    if (name) {
        const nameString = name.split("");

        nameString.forEach((letter) => {
            if (!letter.match(カタカナ) && !letter.match(space)) {
                isKana = false;
            }
        });
    }

    if (!isKana) {
        errors.push("全角カタカナで入力してください");
    }

    if (!name) {
        errors.push("必要項目です");
    }

    return errors;
}

export function validateRadio(value: string) {
    const errors: string[] = [];

    if (value === "") {
        errors.push("必要項目です");
    }

    return errors
}

export function validatePersonalEmail(mailOne: string, mailTwo: string) {
    const errors: string[] = [];

    function checkValidMail(input: string) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        return regex.test(input);
    }

    if (mailOne) {
        if (!checkValidMail(mailOne)) {
            errors.push(`有効なメールアドレスを入力してください`);
        }

    }

    if (mailOne !== mailTwo) {
        errors.push(
            "入力したメールは一致していない。確認して、もう一度入力してください"
        );
    }

    if (!mailOne && !mailTwo) {
        errors.push("必要項目です");
    }

    return errors;
}

export function validateSchoolEmail(mailOne: string, mailTwo: string) {
    const errors: string[] = [];

    function checkToyo(input: string) {
        const regex = /^.*@toyo\.jp$/i;
        return regex.test(input);
    }

    function checkIniad(input: string) {
        const regex = /^.*@iniad\.org$/i;
        return regex.test(input);
    }

    function checkValidMail(input: string) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        return regex.test(input);
    }

    if (mailOne) {
        if (!checkValidMail(mailOne)) {
            errors.push(`有効なメールアドレスを入力してください`);
        }

        if (mailOne !== mailTwo) {
            errors.push(
                "入力したメールは一致していない。確認して、もう一度入力してください"
            );
        }
    }

    if (mailOne) {
        if (!checkToyo(mailOne) && !checkIniad(mailOne)) {
            errors.push(
                `"@toyo.jp"、"@iniad.org"のアドレスを入力してください`
            );
        }
    }

    if (!mailOne || !mailTwo) {
        errors.push("必要項目です");
    }

    return errors;
}

export function validateSelect(input: string, defaultChoice: string) {
    const errors = [];

    if (input === defaultChoice) {
        errors.push("必要項目です");
    }

    return errors;
}

export function validateCheckbox(input: boolean) {
    const errors = [];

    if (input === false) {
        errors.push("必要項目です");
    }

    return errors;
}

export function validatePhone(inputOne: string, inputTwo: string, inputThree: string) {
    const errors: string[] = []

    const phoneOne = inputOne;
    const phoneTwo = inputTwo;
    const phoneThree = inputThree;

    function checkDigits(input: string) {
        if (!input) {
            return true;
        }
        const regex = /^[0-9]*$/;
        return regex.test(input);
    }


    if (phoneOne || phoneTwo || phoneThree) {
        if (
            !checkDigits(phoneOne) ||
            !checkDigits(phoneTwo) ||
            !checkDigits(phoneThree)
        ) {
            errors.push("半角数字で入力してください");
        }
    }

    if (phoneOne) {
        if (phoneOne.split("").length < 2) {
            errors.push("有効な電話番号を入力してください");
        } else if (!phoneTwo || phoneTwo.split("").length < 3) {
            errors.push("有効な電話番号を入力してください");
        } else if (!phoneThree || phoneThree.split("").length < 3) {
            errors.push("有効な電話番号を入力してください");
        }
    }

    if (!phoneOne && !phoneTwo && !phoneThree) {
        errors.push("必要項目です");
    }

    return errors;
}