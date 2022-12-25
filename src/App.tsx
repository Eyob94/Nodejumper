import Cards from "./components/Card/Cards";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
function App() {
	return (
		<div className="App flex justify-center">
			<div className="w-full max-w-5xl">
				<Navbar />
				<Info />
				<Search />
				<Cards />
			</div>
		</div>
	);
}

export default App;
