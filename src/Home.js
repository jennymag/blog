import Blogpost from "./Blogpost";

const data = [
  {
    title: "Stockholm city center",
    text: "I like beautiful stairs.",
    category: "Life",
    id: 4,
    time: "Friday, 20 januari 2021, 11:41",
    alt: "stockholm",
    img:
      "https://images.unsplash.com/photo-1551730708-87acf0563a4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
  },
  {
    title: "Colors of the wind",
    text: "I love theese pastel colors",
    category: "Life",
    id: 3,
    time: "Onsdag, 12 december 2020, 02:00",
    alt: "house",
    img:
      "https://images.unsplash.com/photo-1497217968520-7d8d60b7bc25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
  },
  {
    title: "I love music",
    text: "But I don't. ",
    category: "Life",
    id: 2,
    time: "Monday, 1 october 2020, 12:41",
    alt: "consert",
    img:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
  },
  {
    title: "My first blog post",
    text: "Welcome to my blog! This is my first but not last post",
    category: "Life",
    id: 1,
    time: "Friday, 20 may 2020, 16:10",
    alt: "cottage",
    img:
      "https://images.unsplash.com/photo-1446419385500-203d54c0c460?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
];

function Home(props) {
  return (
    <>
      {data.map((post) => (
        <Blogpost key={post.id} {...post} />
      ))}
    </>
  );
}

export default Home;
