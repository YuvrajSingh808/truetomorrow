export default function Information() {
    const values = [22, 34, 26, 6, 12]
    const texts = ['Chronic Obstructive Pulmonary Disease', 'Stroke', 'Ischaemic Heart Disease', 'Tracheal Bronchus and Lung Cancer', 'Acute Lower Respiratory Infections in Children']
    return (
        <div className="h-screen bg-white px-12 py-20 ">
            <div className="w-3/5 mx-auto flex flex-col items-center justify-center ">
                <p className="w-1/2 text-3xl text-center font-bold uppercase">iNDOOR AiR POLLUTiON iS
                    KiLLiNG YOU, SiLENTLY!</p>
                <p className="text-xl text-center my-4 w-3/4">According to WHO, every 9 out of 10 people breathe harmful air that
                    makes air pollution one of our biggest health threats. Globally, each
                    year indoor air pollution kills 3.2 million people prematurely, out of
                    which 237000 deaths are of children under the age of 5.
                </p>
                <div className="flex flex-wrap w-full justify-center">
                    {values.map((value, index) => {
                        return (
                            <StatIcon value={value} text={texts[index]} key={index} />
                        );
                    })}
                </div>
                <p className="font-bold text-blue-900 text-2xl uppercase my-16">
                iNDOOR AiR POLLUTiON-CAUSED BREAKDOWN BY DiSEASE
                </p>
            </div>
        </div>
    );
}

function StatIcon(props: {value: number, text: string}) {
    const total = 100;
    return (
        <div className="flex flex-col space-y-2 w-1/5">
            <div className="w-full mr-2 h-24">

            </div>
            <div className="flex flex-wrap w-full gap-[2px]">
                {Array.from(Array(total)).map((_, index) => {
                    // console.log(index);
                    return (
                        <div className={`w-3.5 h-3.5 rounded-full ${index < props.value ? 'bg-blue-900' : 'bg-gray-300'}`} key={index}>
                        </div>  
                    );
                })}
            </div>
            <p className="text-xl">{props.value}%</p>
            <p className="text-xl pr-2">{props.text}</p>
        </div>
    );
}