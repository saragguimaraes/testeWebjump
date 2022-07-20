import { Elements } from "../elements/webJump";

describe("Clicar Botoes Painel", () => {
  it("Clicar Botões Painel Com Sucesso", () => {
    cy.visit("/");

    //Clicar nos botões
    cy.get(Elements.iFrameButton1).should("be.visible").click();
    cy.get(Elements.iFrameButton2).should("be.visible").click();
    cy.get(Elements.iFrameButton4).should("be.visible").click();

    //Validar a ausência
    cy.contains("iFrameButton1, iFrameButton2, iFrameButton4")
    .should("not.exist");
  });
});
