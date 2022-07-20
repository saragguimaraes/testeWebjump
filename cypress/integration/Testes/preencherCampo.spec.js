import { Elements } from "../elements/webJump";

describe("Preencher Campo", () => {
  it("Preencher Campo Com Sucesso", () => {
    cy.visit("/");

    const text = "Preenchendo o campo.";

    //Preenchendo campo YourFirstName
    cy.get(Elements.name1).should("be.visible").type(text);

    //Clicando no botão One
    cy.get(Elements.button1).should("be.visible").click();

    //Selecionando opção 3
    cy.get(Elements.opt3).should("be.visible").click();

    //Selecionando opção 2 no checkbox
    cy.get(Elements.selectBox).should("be.visible").select("option_two");

    //Validar a presença da imagem
    cy.get(".img-responsive-center-block").should("be.visible");
  });
});
