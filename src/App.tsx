function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-9xl">I am bored</h1>
      <form>
        <button className="bg-green-400">Get something to do</button>
        <fieldset>
          <legend>Want to be more specific?</legend>
          <p>
            <label htmlFor="participants">Participants</label>
            <input
              type="number"
              name="participants"
              className="border"
              min="1"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="type">Type</label>
            <select
              name="type"
              className="border"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option disabled={true} selected={true}>
                Select something
              </option>
              <option value="education">Education</option>
              <option value="recreational">Recreational</option>
              <option value="social">Social</option>
              <option value="diy">DIY</option>
              <option value="charity">Charity</option>
              <option value="cooking">Cooking</option>
              <option value="relaxation">Relaxation</option>
              <option value="music">Music</option>
              <option value="busywork">Busywork</option>
            </select>
          </p>
          <p>
            <label htmlFor="price">Price</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0"
              name="price"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="price">Accessibility</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0"
              name="price"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
