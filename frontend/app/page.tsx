import Header from "./components/Header";
import Items from "./components/Items";

export default function Home() {

    return (
        <div className="flex justify-center items-center h-screen bg-slate-400">
            <div className="h-[500px] w-[600px] shadow-xl bg-white rounded-md">
                <Header/>
                <Items/>
            </div>
        </div>
    );
}
