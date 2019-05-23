# BrokeSmoke

## The Design Challenge // Use Case
* Ik wil bij kunnen houden hoeveel sigaretten ik (vanaf het moment van minderen met roken) bespaar, wel rook, laat bietsen en wat de financiële gevolgen hiervan zijn.

* I want to track my smoking habits from the moment of quitting and what the financial outcome of this is.

## Functionality
By using this website, you can track how many cigarettes you chose not to smoke, you chose to smoke and how many you gave away to others. You'll also be able to see how much money you saved or spent from the moment you smoked less.


## Wireflow
![screenshot of first half](https://paper-attachments.dropbox.com/s_10BA620165FE32DB3EE837212670E796E3D7D1FB3A7C3434F8B67BE0AF78582E_1558584808452_Screenshot+2019-05-23+at+06.12.49.png)

![screenshot of second half](https://paper-attachments.dropbox.com/s_10BA620165FE32DB3EE837212670E796E3D7D1FB3A7C3434F8B67BE0AF78582E_1558584818134_Screenshot+2019-05-23+at+06.13.10.png)


## Core functionalities
* Add a cigarette you haven't smoked
* Add a cigarette you did smoke
* Add a cigarette you gave away
* Correct (decrease) a cigarette you haven't smoked
* Correct (decrease) cigarette you did smoke
* Correct (decrease) a cigarette you gave away
* Track how much money you saved by choosing not to smoke
* Track how much money you spent by choosing to smoke
* Track how much money you spent by letting others scrounge

## Features/Browser Technologies
What I did to enhance inclusiveness:
Tested with JAWS on Windows, added paragraphs with extra explanation for visually impaired users.

#### Images not available
Use alt-text (even it's an unimportant image, then leave it empty "")

#### Custom fonts turned off
Fallback on the default fonts; serif/serif

#### Javascript turned off
Write HTML semantically and make sure everything already works *before* getting to JavaScript
- [x] Made everything server-side.

#### Colorblindness (disable color)
Test with Colorblindly, make sure the contrast is big enough and make use of the size of the used illustrations aswell when using color as part of a legenda

#### Slow internet (turn off broadwidth)
Test in console>network. Made sure the core functionalities load first.

#### Cookies turned off
Still works fine.

#### localStorage disabled
Still works fine.

#### Mouse/trackpad does't work
Write HTML semantically correct and tested with a screenreader.

## Features supported by which browsers
Some of my features on top of the core functionalities will only work in specific browsers.
Basically, the only 'tricky' one was the usage of Flexbox:

![caniuse about flexbox](https://paper-attachments.dropbox.com/s_10BA620165FE32DB3EE837212670E796E3D7D1FB3A7C3434F8B67BE0AF78582E_1558594870779_Screenshot+2019-05-23+at+09.01.02.png)


### Four layers of Progressive Enhancement
* Functional
The html works and it's possible to add a smoke

* Reliable
It all still works whenever JavaScript is turned off

* Reusable
It's easy to use on-the-go

* Pleasurable
A bit of extra css-animations added to make it more fun


## To Do:
- [ ] Flexbox; center not working properly
- [ ] Adding a 'nice to have'-JavaScriptfeature.
