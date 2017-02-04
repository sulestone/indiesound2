import { IndieSound2Page } from './app.po';

describe('indie-sound2 App', function() {
  let page: IndieSound2Page;

  beforeEach(() => {
    page = new IndieSound2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
