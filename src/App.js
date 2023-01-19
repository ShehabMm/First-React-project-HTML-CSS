function App() {
  return (
    <>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            Adidas
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">women</a>
            </li>
            <li>
              <a href="#">kids</a>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div className="text">
            <h2 data-text="Adidas Egypt...">
              <br />
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, recusandae. Fuga architecto veritatis exercitationem
              odio.
            </p>
          </div>
          <div className="image">
            <img src="shoes.png" alt="not found" srcSet="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
