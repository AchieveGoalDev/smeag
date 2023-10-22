
export type DataSet = {
    label: string;
    backgroundColor: string;
    data: number[]
}

export type GraphData = {
    labels: string[],
    datasets: DataSet[],
    meta: {
        test: string,
        amount: string
    }
}

export type CourseData = {
    name: string,
    graph: null | GraphData
}


/**************COURSE GRAPH DATA*****/

const graphBgOne = 'rgba(249, 115, 22, .8)';
const graphBgTwo = 'rgba(14, 165, 233, .5)';
const graphLabelOne = "受講後"
const graphLabelTwo = "受講前"


const toeflGraphData: GraphData = {
    labels: ["N.Hさん", "R.Mさん", "T.Aさん", "H.Oさん", "R.Fさん", "K.Hさん", "R.Tさん", "D.Uさん", "N.Hさん"],
    datasets: [{
        label: graphLabelOne,
        backgroundColor: graphBgOne,
        data: [73, 71, 63, 65, 46, 61, 88, 77, 75]
    },
    {
        label: graphLabelTwo,
        backgroundColor: graphBgTwo,
        data: [52, 59, 46, 42, 29, 55, 72, 70, 60]
    },
    ],
    meta: {
        test: "TOEFL",
        amount: "16"
    }
}

const toeicGraphData: GraphData = {
    labels: ["H.Nさん", "A.Hさん", "F.Tさん", "K.Sさん", "R.Iさん", "O.Kさん", "S.Kさん", "A.Sさん", "Y.Dさん"],
    datasets: [{
        label: graphLabelOne,
        backgroundColor: graphBgOne,
        data: [680, 650, 620, 630, 520, 600, 720, 680, 670]
    },
    {
        label: graphLabelTwo,
        backgroundColor: graphBgTwo,
        data: [550, 590, 520, 510, 440, 570, 650, 640, 600]
    },
    ],
    meta: {
        test: "TOEIC",
        amount: "100"
    }
}

export const courses: CourseData[] = [
    { name: "ESL", graph: null },
    { name: "IELTS", graph: null },
    { name: "TOEFL", graph: toeflGraphData },
    { name: "TOEIC", graph: toeicGraphData },
    { name: "ビジネス", graph: null },
    { name: "ファミリー", graph: null },
]