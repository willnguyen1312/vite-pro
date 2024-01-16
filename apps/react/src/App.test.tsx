import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should render", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Add" });
    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(
      screen.getByRole("listitem", {
        // @ts-ignore
        value: "1",
      }),
    ).toBeInTheDocument();

    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
});
