import React, { useState, createContext } from 'react'
import Counter from './components/counter'

export const ThemeContext = createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState({
    dark: false,
    lang: 'english'
  })

  function toggleTheme() {
    setDarkTheme({
      dark: !darkTheme.dark,
      lang: darkTheme.lang
    })
  }

  return (
    <div className="App">
      <nav className="navbar"></nav>
      <main>
        <ThemeContext.Provider value={darkTheme}>
          <p>TEsadfojdsajofsajd sadfadsf</p>
          <Counter />
          <button onClick={toggleTheme}>Toggle theme</button>
        </ThemeContext.Provider>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio orci, bibendum dignissim hendrerit sit amet, commodo vitae arcu. Sed hendrerit sed enim quis maximus. Fusce urna turpis, porttitor a eros eu, gravida sollicitudin purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id aliquet eros, eu bibendum quam. Nulla fermentum ultricies magna, ut aliquam dui dapibus eu. Proin sed nunc suscipit, dignissim lorem a, tempus felis. Nulla in nulla eleifend, mattis lectus semper, dignissim enim. Suspendisse potenti. Curabitur laoreet sapien quis commodo gravida.<br /><br />
          Curabitur id ullamcorper libero, vitae cursus lacus. Morbi velit elit, fermentum eget aliquet eget, viverra non lorem. Duis ac dictum tellus. Mauris eu odio turpis. Mauris non ornare dui. Proin volutpat, libero ac pretium sollicitudin, orci dolor cursus urna, et venenatis nisi nisi id ex. Integer nec blandit erat, sed sollicitudin mi. Fusce tincidunt orci vel odio interdum, ac efficitur lectus ultricies. Cras vel congue ex. Donec sodales feugiat nisi, at semper elit varius sit amet. Cras maximus fermentum dui, commodo accumsan lacus semper sit amet. Proin mauris orci, interdum vel semper eget, facilisis at lorem. Fusce et tellus eget quam malesuada laoreet ac sit amet metus. Nam ornare, sem congue consequat vehicula, erat ipsum porttitor nisl, eget hendrerit massa nunc sodales nisi. Fusce sagittis magna eget mauris mollis, consequat ultrices mi vulputate. Aenean urna nibh, commodo et velit ac, lobortis euismod dui.<br /><br />
          Integer varius sodales urna, eget semper tellus molestie vitae. Nulla efficitur lacus nec odio dapibus, ac accumsan massa pharetra. Sed nec tristique velit. Fusce auctor risus vitae lorem vestibulum pretium. Donec ut mi vitae sapien faucibus mollis. Vivamus a bibendum dolor. Sed id arcu rutrum, hendrerit augue eget, sollicitudin mauris. Mauris lobortis sit amet tellus quis consectetur. Quisque vel ipsum sit amet enim congue aliquam ut tincidunt ipsum. Sed pretium lorem id ligula efficitur lobortis. Ut in dapibus metus. Donec scelerisque lectus sit amet massa pharetra malesuada.<br /><br />
          Vestibulum id ullamcorper quam, non tempor neque. Praesent eget orci in eros fermentum consequat vel et dui. Sed id pulvinar enim. Morbi feugiat dictum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras imperdiet metus magna, quis mattis urna pellentesque in. Etiam tempus, mi et tristique sollicitudin, augue velit malesuada metus, eget iaculis nisl libero id quam. Donec a porta neque.<br /><br />
          Proin feugiat, nisl eget iaculis malesuada, sem felis consequat quam, sed varius tortor mauris vel purus. Proin porta justo libero, consequat viverra libero bibendum nec. Vestibulum sagittis sapien ac magna pretium, ac convallis dolor ultrices. Vestibulum semper, lectus in dapibus ultrices, lectus nibh tempus lectus, a maximus est velit id est. Ut quis nulla eget libero dictum rhoncus. Vivamus eu sodales nunc. Phasellus lacus felis, pretium vitae est sit amet, ultrices maximus nunc. Suspendisse pharetra posuere tempus. In feugiat viverra faucibus. Mauris ultricies neque ante, ut hendrerit nibh porta ut. Sed vel nunc in tortor porta pellentesque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio orci, bibendum dignissim hendrerit sit amet, commodo vitae arcu. Sed hendrerit sed enim quis maximus. Fusce urna turpis, porttitor a eros eu, gravida sollicitudin purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id aliquet eros, eu bibendum quam. Nulla fermentum ultricies magna, ut aliquam dui dapibus eu. Proin sed nunc suscipit, dignissim lorem a, tempus felis. Nulla in nulla eleifend, mattis lectus semper, dignissim enim. Suspendisse potenti. Curabitur laoreet sapien quis commodo gravida.<br /><br />
          Curabitur id ullamcorper libero, vitae cursus lacus. Morbi velit elit, fermentum eget aliquet eget, viverra non lorem. Duis ac dictum tellus. Mauris eu odio turpis. Mauris non ornare dui. Proin volutpat, libero ac pretium sollicitudin, orci dolor cursus urna, et venenatis nisi nisi id ex. Integer nec blandit erat, sed sollicitudin mi. Fusce tincidunt orci vel odio interdum, ac efficitur lectus ultricies. Cras vel congue ex. Donec sodales feugiat nisi, at semper elit varius sit amet. Cras maximus fermentum dui, commodo accumsan lacus semper sit amet. Proin mauris orci, interdum vel semper eget, facilisis at lorem. Fusce et tellus eget quam malesuada laoreet ac sit amet metus. Nam ornare, sem congue consequat vehicula, erat ipsum porttitor nisl, eget hendrerit massa nunc sodales nisi. Fusce sagittis magna eget mauris mollis, consequat ultrices mi vulputate. Aenean urna nibh, commodo et velit ac, lobortis euismod dui.<br /><br />
          Integer varius sodales urna, eget semper tellus molestie vitae. Nulla efficitur lacus nec odio dapibus, ac accumsan massa pharetra. Sed nec tristique velit. Fusce auctor risus vitae lorem vestibulum pretium. Donec ut mi vitae sapien faucibus mollis. Vivamus a bibendum dolor. Sed id arcu rutrum, hendrerit augue eget, sollicitudin mauris. Mauris lobortis sit amet tellus quis consectetur. Quisque vel ipsum sit amet enim congue aliquam ut tincidunt ipsum. Sed pretium lorem id ligula efficitur lobortis. Ut in dapibus metus. Donec scelerisque lectus sit amet massa pharetra malesuada.<br /><br />
          Vestibulum id ullamcorper quam, non tempor neque. Praesent eget orci in eros fermentum consequat vel et dui. Sed id pulvinar enim. Morbi feugiat dictum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras imperdiet metus magna, quis mattis urna pellentesque in. Etiam tempus, mi et tristique sollicitudin, augue velit malesuada metus, eget iaculis nisl libero id quam. Donec a porta neque.<br /><br />
          Proin feugiat, nisl eget iaculis malesuada, sem felis consequat quam, sed varius tortor mauris vel purus. Proin porta justo libero, consequat viverra libero bibendum nec. Vestibulum sagittis sapien ac magna pretium, ac convallis dolor ultrices. Vestibulum semper, lectus in dapibus ultrices, lectus nibh tempus lectus, a maximus est velit id est. Ut quis nulla eget libero dictum rhoncus. Vivamus eu sodales nunc. Phasellus lacus felis, pretium vitae est sit amet, ultrices maximus nunc. Suspendisse pharetra posuere tempus. In feugiat viverra faucibus. Mauris ultricies neque ante, ut hendrerit nibh porta ut. Sed vel nunc in tortor porta pellentesque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio orci, bibendum dignissim hendrerit sit amet, commodo vitae arcu. Sed hendrerit sed enim quis maximus. Fusce urna turpis, porttitor a eros eu, gravida sollicitudin purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id aliquet eros, eu bibendum quam. Nulla fermentum ultricies magna, ut aliquam dui dapibus eu. Proin sed nunc suscipit, dignissim lorem a, tempus felis. Nulla in nulla eleifend, mattis lectus semper, dignissim enim. Suspendisse potenti. Curabitur laoreet sapien quis commodo gravida.<br /><br />
          Curabitur id ullamcorper libero, vitae cursus lacus. Morbi velit elit, fermentum eget aliquet eget, viverra non lorem. Duis ac dictum tellus. Mauris eu odio turpis. Mauris non ornare dui. Proin volutpat, libero ac pretium sollicitudin, orci dolor cursus urna, et venenatis nisi nisi id ex. Integer nec blandit erat, sed sollicitudin mi. Fusce tincidunt orci vel odio interdum, ac efficitur lectus ultricies. Cras vel congue ex. Donec sodales feugiat nisi, at semper elit varius sit amet. Cras maximus fermentum dui, commodo accumsan lacus semper sit amet. Proin mauris orci, interdum vel semper eget, facilisis at lorem. Fusce et tellus eget quam malesuada laoreet ac sit amet metus. Nam ornare, sem congue consequat vehicula, erat ipsum porttitor nisl, eget hendrerit massa nunc sodales nisi. Fusce sagittis magna eget mauris mollis, consequat ultrices mi vulputate. Aenean urna nibh, commodo et velit ac, lobortis euismod dui.<br /><br />
          Integer varius sodales urna, eget semper tellus molestie vitae. Nulla efficitur lacus nec odio dapibus, ac accumsan massa pharetra. Sed nec tristique velit. Fusce auctor risus vitae lorem vestibulum pretium. Donec ut mi vitae sapien faucibus mollis. Vivamus a bibendum dolor. Sed id arcu rutrum, hendrerit augue eget, sollicitudin mauris. Mauris lobortis sit amet tellus quis consectetur. Quisque vel ipsum sit amet enim congue aliquam ut tincidunt ipsum. Sed pretium lorem id ligula efficitur lobortis. Ut in dapibus metus. Donec scelerisque lectus sit amet massa pharetra malesuada.<br /><br />
          Vestibulum id ullamcorper quam, non tempor neque. Praesent eget orci in eros fermentum consequat vel et dui. Sed id pulvinar enim. Morbi feugiat dictum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras imperdiet metus magna, quis mattis urna pellentesque in. Etiam tempus, mi et tristique sollicitudin, augue velit malesuada metus, eget iaculis nisl libero id quam. Donec a porta neque.<br /><br />
          Proin feugiat, nisl eget iaculis malesuada, sem felis consequat quam, sed varius tortor mauris vel purus. Proin porta justo libero, consequat viverra libero bibendum nec. Vestibulum sagittis sapien ac magna pretium, ac convallis dolor ultrices. Vestibulum semper, lectus in dapibus ultrices, lectus nibh tempus lectus, a maximus est velit id est. Ut quis nulla eget libero dictum rhoncus. Vivamus eu sodales nunc. Phasellus lacus felis, pretium vitae est sit amet, ultrices maximus nunc. Suspendisse pharetra posuere tempus. In feugiat viverra faucibus. Mauris ultricies neque ante, ut hendrerit nibh porta ut. Sed vel nunc in tortor porta pellentesque.
        </p>
        <div class="wrapper">
          <div class="box a">a</div>
          <div class="box b">b</div>
          <div class="box c">c</div>
          <div class="box d">d</div>
          <div class="box e">e</div>
          <div class="box f">f</div>
          <div class="box g"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
