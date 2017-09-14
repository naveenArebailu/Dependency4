import { DepInjService4Page } from './app.po';

describe('dep-inj-service4 App', function() {
  let page: DepInjService4Page;

  beforeEach(() => {
    page = new DepInjService4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
