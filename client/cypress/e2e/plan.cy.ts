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

        //시간 변경하기 
        cy.findAllByTestId("daily-time-start").first().type("09:00");
        cy.findByText('시간 설정 완료').click();

            // 필터 적용하기
            cy.findAllByTestId('place-card').should('have.length.greaterThan',0);

            let totalCount = 0;
            cy.findAllByTestId('place-card').its('length').then(count => {
              totalCount = count;

              //명소 필터를 선택한다.
             cy.findByRole('button', { name: '명소' }).click();
             cy.findAllByTestId('place-card').should(
                 'have.length.lessThan', 
                 totalCount,
             );
         });
        cy.findByRole('button', { name: '명소' }).click();

        //장소 추가하기
        cy.findAllByTitle('plus').each($el => {
            cy.wrap($el).click();
        });

        cy.findAllByRole('button', { name: '다음' }).click();
        
      });

      //숙소 선택하기 
      cy.findAllByTitle('plus').first().click();
      cy.findAllByTitle('plus').first().click();
      cy.findByRole('button', { name:'다음' }).click();

      //일정 확인하기 
      cy.url().should('include', 'itinerary/seoul');
      cy.findAllByTestId('itinerary-card').should('have.length.gt',0);
      cy.findByRole('button', { name: '2일차'}).click();
      cy.findAllByTestId('itinerary-card').should('have.length.gt',0);

    });
