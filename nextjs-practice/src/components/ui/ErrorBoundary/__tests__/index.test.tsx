import { render, describe, expect, it, vi } from "@/src/utils/testUtils";
import ErrorBoundary from "../";

// A component that throws an error
const ErrorComponent = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>,
    );

    const contentElement = getByText("Test Content");
    expect(contentElement).toBeTruthy();
  });

  it("renders fallback when there is an error", () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error Fallback</div>}>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    const fallbackElement = getByText("Error Fallback");
    expect(fallbackElement).toBeTruthy();
  });

  it("logs the error to the console", () => {
    const spyConsoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(spyConsoleError).toHaveBeenCalled();

    spyConsoleError.mockRestore();
  });
});
