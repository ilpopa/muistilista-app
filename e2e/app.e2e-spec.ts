import { MuistilistaAppPage } from './app.po';

describe('muistilista-app App', function() {
  let page: MuistilistaAppPage;

  beforeEach(() => {
    page = new MuistilistaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
