# Lens Type

O sistema possui como objetivo receber inputs do usuário com as informações presentes em sua receita oftálmica e a partir disso, exibir a lente que atende a necessidade do usuário. Para isso é necessário captar 4 parâmetros do usuário: graus esférico e cilíndrico de cada olho. Após inseridos os parâmetros, o sistema verifica qual é a lente indicada: Prime e Vision. 

<strong>Prime</strong>: só pode ser uma opção para o usuário que tiver grau esférico entre -3 e -12. Além disso, ela só atende até grau cilíndrico -2, porém, se o usuário apresentar grau cilíndrico, ela passa a atender grau esférico entre -3 e -10.

<strong>Vision</strong>: é uma opção para quem tem de 0 a -15 de esférico e até -5 de cilíndrico.

Além do mais, foi definido que o grau limite que o usuário pode inserir é de 0 a -15 para esférico e -6 para cilíndrico e são números iterados de 0,25 em 0,25.
<br>
<br>

### Sobre o projeto

Para o desenvolvimento desse sistema foi utilizado JavaScript e para a criação da interface, HTML e CSS.
