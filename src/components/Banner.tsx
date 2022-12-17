import bg from "../assets/bg.png";
import NavigationBar from "./Navbar";
import { Button } from "@material-tailwind/react";

export default function Banner() {
  return (
    <div className="h-screen bg-center px-12 pb-20 bg-cover flex justify-between bg-opacity-50 bg-white items-center flex-col bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
        <NavigationBar selected="Home" />
        <div className="flex flex-col w-1/3 items-center space-y-10">
            <p className=" text-3xl text-center text-white uppercase">HOME TEXTiLES THAT HELP YOU BREATHE BETTER AiR</p>
            <div className="flex space-x-12 w-full mx-auto justify-center">
                <Button className="bg-blue-900" variant="filled" size="md" ripple={true}>
                    Know How
                </Button>
                <Button className="text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900" variant="outlined" size="md" ripple={true}>
                    Partner With Us
                </Button>
            </div>
        </div>
    </div>
  );
}