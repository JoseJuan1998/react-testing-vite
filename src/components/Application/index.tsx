export default function Application() {
  return (
    <>
      <img src="" alt="logo image" title="logo" />
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <small>All fields are mandatory</small>
      <br />
      <br />
      <div data-testid="custom-element">Custom HTML element</div>
      <br />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" defaultValue={'Juan'} />
        </div>
        <br />
        <div>
          <label htmlFor="bio" placeholder="Write your bio">
            Bio
          </label>
          <textarea id="bio" name="bio" />
        </div>
        <br />
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">Unites States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <br />
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
