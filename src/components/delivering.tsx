import sunshine from '../assets/sunshine.jpg';
export default function Delivering() {
    return (
        <div className="flex flex-col items-center justify-center w-full my-32 py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${sunshine})` }}>

            <div className="w-3/5 mx-auto flex flex-col items-center justify-center ">
                <p className="text-4xl text-center w-1/2 uppercase font-bold">DELiVERiNG WELLNESS ONE HOME AT A TiME</p>
                <p className="text-xl text-center my-4 w-3/4">True Tomorrow is a low-carbon home wellness startup that solves the
                    problem of indoor air pollution with ZERO, a unique range of
                    air-purifying home textiles that helps you breathe better air without
                    the need of any electricity, energy, equipment or extra space.
                </p>
                <p className="text-xl text-center my-4 w-3/4">
                    As envisioned by climate warriors, True Tomorrow’s vision is to create
                    a better tomorrow for humankind by tackling the present
                    environmnetal crisises to deliver wellness in our sanctuaries.
                </p>
            </div>
        </div>
    );
}
