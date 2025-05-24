import { addDays, format } from "date-fns";

describe("여행 계획 페이지", () => {
    it("여행 일정을 만들수 있어야 한다.", () => {
        cy.visit('/plan/seoul');

        // 여행기간을 선택한다
        const date = new Date();
        const DATE_FORMAT = 'yyyy년 M월 d일';
        cy.findByRole("option", {name: new RegExp(format(date, DATE_FORMAT))})
            .should('exist')
            .click();
        const after2Days = addDays(date, 2);
        cy.findAllByRole("option", { name: new RegExp(format(after2Days, DATE_FORMAT))})
            .should('exist')
            .click();
        cy.findByRole('button', { name: '선택'}).click();
    })
})