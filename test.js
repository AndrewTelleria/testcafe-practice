import Page from './page-object';

fixture `First Fixture`
    .page `https://devexpress.github.io/testcafe/example`;

const page = new Page();

test('My first test', async t => {
  await t
    .typeText(page.nameInput, 'Andrew Telleria')
    .click(page.submitButton)
    .expect(page.articleHeader.innerText).eql('Thank you, Andrew Telleria!');
});

