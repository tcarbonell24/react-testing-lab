import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../components/App";

test("filters transactions based on search input", async () => {
  render(<App />);
  
  const searchInput = screen.getByPlaceholderText(/search your recent/i);
  fireEvent.change(searchInput, { target: { value: "MetroCard" } });

  await waitFor(() => {
    expect(
      screen.getByText(/MTA Vending Machine: MetroCard/i)
    ).toBeInTheDocument();
  });
});
