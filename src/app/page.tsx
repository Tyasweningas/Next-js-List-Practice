import ItemCard from "@/components/item-card";

const Home = () => {
    const catData = [
        { name: "Aegean", imgCat: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" },
        { name: "American Bobtail", imgCat: "https://cdn2.thecatapi.com/images/hBXicehMA.jpg" },
        { name: "American Curl", imgCat: "https://cdn2.thecatapi.com/images/xnsqonbjW.jpg" },
        { name: "British Longhair", imgCat: "https://cdn2.thecatapi.com/images/7isAO4Cav.jpg" },
        { name: "Burmese", imgCat: "https://cdn2.thecatapi.com/images/4lXnnfxac.jpg" },
        { name: "California Spangled", imgCat: "https://cdn2.thecatapi.com/images/B1ERTmgph.jpg" },
        { name: "Chausie", imgCat: "https://cdn2.thecatapi.com/images/vJ3lEYgXr.jpg" }
    ];

    return (
        <main>
            <h1>List Kucing</h1>
            <ul>
                {catData.map((cat, index) => (
                    <li key={index}>
                        <ItemCard name={cat.name} imgCat={cat.imgCat} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
