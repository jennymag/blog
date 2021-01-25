import Blogpost from "./Blogpost";

const data = [
  {
    title: "My first blog post",
    text: "Welcome to my blog! This is my first but not last post",
    category: "Life",
    id: 1,
    time: "12:30 12-12-12",
  },
  {
    title: "I love music",
    text: "But I don't. ",
    category: "Life",
    id: 2,
    time: "14:40 01-04-13",
  },
];

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      {data.map((post) => (
        <Blogpost {...post} />
      ))}
      <h2>{data[0].title}</h2>
    </>
  );
}

export default Home;
