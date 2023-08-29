import Button from "components/buttons/index"
const { render } = require("@testing-library/react")

it("renders Button component correctly", () => {
  render(<Button text=""/>)
})
