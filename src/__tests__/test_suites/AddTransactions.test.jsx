import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../components/App";

test("adds a new transaction and renders it in the list", async () => {
  render(<App />);
  
  fireEvent.change(screen.getByPlaceholderText(/description/i), {
    target: { value: "Test Transaction" }
  });
  fireEvent.change(screen.getByPlaceholderText(/category/i), {
    target: { value: "Testing" }
  });
  fireEvent.change(screen.getByPlaceholderText(/amount/i), {
    target: { value: "123.45" }
  });
  fireEvent.change(screen.getByRole("textbox", { name: /date/i }), {
    target: { value: "2025-07-27" }
  });

  fireEvent.click(screen.getByText(/add transaction/i));

  await waitFor(() => {
    expect(screen.getByText(/Test Transaction/i)).toBeInTheDocument();
  });
});
