import type { NextPage } from "next";

const TailwindPractice2: NextPage = () => {
    return (
        <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
            {/* Creating widgets using peers and form */}
            <form className="flex flex-col space-y-2  p-5 ">
                <input
                    type="text"
                    required
                    placeholder="Username"
                    className="border p-1 peer border-gray-400 rounded-md "
                />
                <span className="hidden peer-invalid:block peer-invalid:text-red-500">
                    This input is invalid
                </span>
                <span className="hidden peer-valid:block peer-valid:text-teal-500">
                    Awesome username
                </span>
                <span className="hidden peer-hover:block peer-hover:text-amber-500">
                    Hello
                </span>
                <input type="submit" value="Login" className="bg-white" />
            </form>

            {/* Creating widgets using details */}
            <div className="flex flex-col space-y-2 p-5">
                <details className="select-none open:text-white open:bg-indigo-400">
                    <summary className="cursor-pointer">
                        What is my fav. food.
                    </summary>
                    <span className="selection:bg-indigo-600">Kimchi</span>
                </details>
            </div>

            {/* Creating widgets using lists */}
            <div className="flex flex-col space-y-2 p-5">
                <ul className="list-decimal marker:text-teal-500">
                    <li>hy</li>
                    <li>hy</li>
                    <li>hy</li>
                </ul>
            </div>

            {/* Creating widgets using file */}
            <div className="flex flex-col space-y-2 p-5">
                <input
                    type="file"
                    className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white 
                    file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 
                    file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
                ></input>
            </div>

            {/* Creating widgets using paragraph */}
            <div className="flex flex-col space-y-2 p-5">
                <p
                    className="first-letter:text-7xl first-letter:hover:text-purple-400
                first-line:bg-slate-500"
                >
                    asdasdasd asdasdasda asdasdasda{" "}
                </p>
            </div>
        </div>
    );
};

export default TailwindPractice2;
