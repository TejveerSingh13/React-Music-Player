import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routesConfig from "./routesConfig";

describe("to test the routing", () => {
  test("to test if default is library", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const libraryComponent = screen.getByText(/library/i);
    expect(libraryComponent).toBeInTheDocument();
  });

  test("to test if /trending is rendered", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/trending"],
    });
    render(<RouterProvider router={router} />);

    const trendingComponent = screen.getByText(/trending/i);
    expect(trendingComponent).toBeInTheDocument();
  });
  test("to test if /feed is rendered", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/feed"],
    });
    render(<RouterProvider router={router} />);

    const feedComponent = screen.getByText(/feed/i);
    expect(feedComponent).toBeInTheDocument();
  });

  test("to test if /player is rendered", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/player"],
    });
    render(<RouterProvider router={router} />);

    const playerComponent = screen.getByText(/player/i);
    expect(playerComponent).toBeInTheDocument();
  });
  test("to test if /favourites is rendered", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/favourites"],
    });
    render(<RouterProvider router={router} />);

    const favouritesComponent = screen.getByText(/favourites/i);
    expect(favouritesComponent).toBeInTheDocument();
  });
});
