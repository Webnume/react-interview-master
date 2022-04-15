// MyVideoList.spec.js created with Cypress

describe("MY VIDEO LIST", () => {
  beforeEach(() => {
    cy.visit("https://incredible-dango-2228b0.netlify.app/");
  });

  it("displays the page title", () => {
    cy.get("h1").contains("MY VIDEO LIST");
  });

  it("display Comedy movies when i click on Comedy checkbox", () => {
    cy.get('[type="checkbox"]').check("Comedy");
    cy.contains("Oceans 8");
    cy.contains("Midnight Sun");
  });

  it("display Animation movies when i click on Animation checkbox", () => {
    cy.get('[type="checkbox"]').check("Animation");
    cy.contains("Les indestructibles 2");
  });

  it("display Thriller movies when i click on Thriller checkbox", () => {
    cy.get('[type="checkbox"]').check("Thriller");
    cy.contains("Sans un bruit");
    cy.contains("Pulp Fiction");
    cy.contains("Seven");
  });

  it("display Drame movies when i click on Drame checkbox", () => {
    cy.get('[type="checkbox"]').check("Drame");
    cy.contains("Creed II");
  });

  it("display Comedy, Animation, Drame movies when i click on Comedy, Animation, Drame checkbox", () => {
    cy.get('[type="checkbox"]').check("Comedy");
    cy.get('[type="checkbox"]').check("Animation");
    cy.get('[type="checkbox"]').check("Drame");
    cy.contains("Creed II");
    cy.contains("Oceans 8");
    cy.contains("Midnight Sun");
    cy.contains("Les indestructibles 2");
  });

  
  it("display 4 movies movies per default", () => {
    cy.contains("Oceans 8");
    cy.contains("Midnight Sun");
    cy.contains("Sans un bruit");
    cy.contains("Les indestructibles 2");
  });

  it("display 8 movies movies when 8 per page is chosen", () => {
    cy.get(".per-page > :nth-child(2)").click()
    cy.contains("Oceans 8");
    cy.contains("Midnight Sun");
    cy.contains("Sans un bruit");
    cy.contains("Les indestructibles 2");
    cy.contains("Creed II");
    cy.contains("Pulp Fiction");
    cy.contains("Pulp Fiction");
    cy.contains("Seven");
  });

  it("display 10 movies movies when 12 per page is chosen", () => {
    cy.get(".per-page > :nth-child(3)").click()
    cy.contains("Oceans 8");
    cy.contains("Midnight Sun");
    cy.contains("Sans un bruit");
    cy.contains("Les indestructibles 2");
    cy.contains("Creed II");
    cy.contains("Pulp Fiction");
    cy.contains("Pulp Fiction");
    cy.contains("Seven");
    cy.contains("Inception");
    cy.contains("Gone Girl");
  });



});
