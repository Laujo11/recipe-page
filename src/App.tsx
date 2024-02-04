import "./app.css";

function App() {
  return (
    <main className="container">
      <div className="page__container">
        <img
          src="images/image-omelette.jpeg"
          alt="header image"
          className="header__image"
        />
        <section className="description">
          <h1 className="description__title">Simple Omelette Recipe</h1>
          <p className="description__paragraph">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>

        <section className="preparation">
          <span className="preparation__title">Preparation time</span>
          <ul className="preparation__ul">
            <li className="preparation__li">
              <span>
                <b>Total:</b> Approximately 10 minutes
              </span>
            </li>
            <li className="preparation__li">
              <span>
                <b>Preparation:</b> 5 minutes
              </span>
            </li>
            <li className="preparation__li">
              <span>
                <b>Cooking:</b> 5 minutes
              </span>
            </li>
          </ul>
        </section>

        <section className="ingredients">
          <span className="ingredients__title">Ingredients</span>
          <ul className="ingredients__ul">
            <li className="ingredients__li">
              <span>2-3 large eggs</span>
            </li>
            <li className="ingredients__li">
              <span>Salt, to taste</span>
            </li>
            <li className="ingredients__li">
              <span>Pepper, to taste</span>
            </li>
            <li className="ingredients__li">
              <span>1 tablespoon of butter or oil</span>
            </li>
            <li className="ingredients__li">
              <span>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </section>
        <section className="instructions">
          <span className="instructions__title">Instructions</span>
          <ul className="instructions__ul">
            <li className="instructions__li">
              <p>
                <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </p>
            </li>
            <li className="instructions__li">
              <p>
                <b>Heat the pan:</b> Place a non-stick frying pan over medium
                heat and add butter or oil.
              </p>
            </li>
            <li className="instructions__li">
              <p>
                <b>Cook the omelette:</b> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li className="instructions__li">
              <p>
                <b>Add fillings (optional):</b> When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </p>
            </li>
            <li className="instructions__li">
              <p>
                <b>Fold and serve:</b> As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </p>
            </li>
            <li className="instructions__li">
              <p>
                <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                needed.
              </p>
            </li>
          </ul>
        </section>

        <section className="nutrition">
          <span className="nutrition__title">Nutrition</span>
          <p className="nutrition__paragraph">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className="nutrition__rows">
            <div className="nutrition__row">
              <span className="nutrition__span">Calories</span>
              <span className="nutrition__span nutrition__span--brown">
                277kcal
              </span>
            </div>
            <div className="nutrition__row">
              <span className="nutrition__span">Carbs</span>
              <span className="nutrition__span nutrition__span--brown">0g</span>
            </div>
            <div className="nutrition__row">
              <span className="nutrition__span">Protein</span>
              <span className="nutrition__span nutrition__span--brown">
                20g
              </span>
            </div>
            <div className="nutrition__row">
              <span className="nutrition__span">Fat</span>
              <span className="nutrition__span nutrition__span--brown">
                22g
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
