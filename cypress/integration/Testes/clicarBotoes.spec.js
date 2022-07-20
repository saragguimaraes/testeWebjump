import { Elements } from "../elements/webJump";

describe("Clicar Botoes", () => {
  it("Clicar Botões Com Sucesso", () => {
    cy.visit("/");

    //Clicar nos botões
    cy.get(Elements.button1).should("be.visible").click();
    cy.get(Elements.button2).should("be.visible").click();
    cy.get(Elements.button4).should("be.visible").click();

    //Validar a ausência
    cy.contains("button1, button2, button4").should("not.exist");
  });
});
