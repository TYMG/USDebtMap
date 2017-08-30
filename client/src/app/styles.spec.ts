import {} from 'jquery';
import {} from 'jasmine';
import {} from 'jasmine-query';



describe('Responsive Styles', () => {

  it('add a div', function () {
    setFixtures(sandbox({class: 'my-class'}))
    $('#sandbox').addClass("matts-class").removeClass("my-class")
    expect($('#sandbox')).not.toHaveClass('my-class')
  });

});
