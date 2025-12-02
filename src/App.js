import logo from "./greenwich_logo.svg";
import "./App.css";

const pizzaData = [
  {
    name: "Pesto Verde Overload",
    ingredients:
      "Our new Pesto 5-Cheese Verde Overload pizza, leveled up with creamy pesto, five cheeses, roasted mushrooms, and more!",
    price: 223.0,
    photoName: "pizzas/cheese--veggies-overload-lift.png",
    soldOut: false,
  },
  {
    name: "Hawaiian Overload",
    ingredients:
      "Our best-selling Hawaiian pizza with sweet pineapples, smoked ham, mozzarella, and cheddar cheese.",
    price: 223.0,
    photoName: "pizzas/hawaiian-overload-lift.png",
    soldOut: false,
  },
  {
    name: "Quattro Queso Overload",
    ingredients:
      "Our cheese pizza overloaded with parmesan cheese, mozzarella, cheddar, and cream cheese.",
    price: 223.0,
    photoName: "pizzas/cheese-overload-lift.png",
    soldOut: false,
  },
  {
    name: "Roast Beef & Cream Cheese Overload",
    ingredients:
      "Our premium pizza generously topped with 3 kinds of cheese and savory Roast Beef!",
    price: 223.0,
    photoName: "pizzas/roast-beef-cream-cheese-overload-lift.png",
    soldOut: false,
  },
  {
    name: "Primo Pepperoni Overload",
    ingredients:
      "Our cheesy and flavor-loaded take on everyone’s favorite pepperoni.",
    price: 223.0,
    photoName: "pizzas/pepperoni-overload-lift.png",
    soldOut: false,
  },
  {
    name: "Honey-Glazed Spinach Overload",
    ingredients:
      "Topped with mozzarella, creamy spinach, pepperoni and chorizo, drizzled with spicy honey for an overloaded sweet and spicy flavor.",
    price: 223.0,
    photoName: "pizzas/honey-glazed-spinach-pepperoni-overload-lift.png",
    soldOut: false,
  },
  {
    name: "Bacon Bianca Overload",
    ingredients:
      "Bacon, ham, mozzarella, cream cheese and mushrooms on freshly baked crust.",
    price: 223.0,
    photoName: "pizzas/bacon-overload-lift.png",
    soldOut: false,
  },
  {
    name: "All-In Overload",
    ingredients:
      "Our best-selling everything-on-it pizza with smoked ham, pepperoni, Italian sausage, chorizo, mushrooms, olives, mozzarella, and cheddar cheese.",
    price: 223.0,
    photoName: "pizzas/all-in-overload-lift.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {};
  return (
    <header className="header">
      <img src={logo} className="header logo" alt="Greenwich Pizza Logo" />
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Greenwich Online Delivery? Make Movie Marathons Better With
            Greenwich Online Delivery. Exclusive Buy 1, Take 2 pizza deal Savor
            the delicious overload goodness. Hurry up Now! Promo Pizzas. Pizza &
            Pasta Group Meals.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza() {
  return (
    <li className={}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>Starts at ₱{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're happy to welcome you between 8:00 AM and 10:00 PM.</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're open from 8:00 AM to 10:00 PM. Come visit us or order online.</p>
      <button className="btn">Order Now!</button>
    </div>
  );
}

export default App;
