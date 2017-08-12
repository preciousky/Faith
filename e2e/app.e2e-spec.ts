import { CitiPreciouskyFightPage } from './app.po';

describe('citi-preciousky-fight App', function() {
  let page: CitiPreciouskyFightPage;

  beforeEach(() => {
    page = new CitiPreciouskyFightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
