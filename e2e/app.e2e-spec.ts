import { AppPage } from './app.po';

describe('Angular4-Fusioncharts Sample App', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it(`should display wrapper title 'Angular4-FusionCharts Wrapper'`, () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Angular4-FusionCharts Wrapper');
    });

    it(`should display a sample chart using Angular4-FusionCharts wrapper`, () => {
        page.navigateTo();
        console.log(page.getChartElement());
        expect(page.getChartElement()).toEqual('fusioncharts');
    });
});
