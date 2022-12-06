// Test for inputs and getting the request back from the API
export {};

context('Register // Login // Create Contacts', () => {
	it('Try to access the agenda page without token', () => {
		cy.visit('http://localhost:3000/agenda');
		cy.viewport(1440, 900);

		cy.contains('Bem-vindo à AppGenda').should('be.visible');
	});

	it('Fill the Login form with not valid data', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="password"]').type('1234');
		cy.get('input[name="email"]').type('teste@gmail.com');
		cy.contains('Login').click();

		cy.contains('Invalid email or password').should('be.visible');
	});

	it('Open Register Modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Registrar-se').click();

		cy.contains('Registre-se').should('be.visible');
	});

	it('Register new user', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Registrar-se').click();

		cy.get('#fullNameRegister').type('Novo Teste');
		cy.get('#emailRegister').type('teste@gmail.com');
		cy.get('#mobilePhoneRegister').type('41 99999 9999');
		cy.get('#phoneRegister').type('41 9999 9999');
		cy.get('#passwordRegister').type('12345678');
		cy.get('#confirmPasswordRegister').type('12345678');

		cy.get('#registerBtn').click();

		cy.contains('Usuário criado com sucesso!').should('be.visible');
	});

	it('Register already used email', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Registrar-se').click();

		cy.get('#fullNameRegister').type('Novo Teste');
		cy.get('#emailRegister').type('teste@gmail.com');
		cy.get('#mobilePhoneRegister').type('41 99999 9999');
		cy.get('#phoneRegister').type('41 9999 9999');
		cy.get('#passwordRegister').type('12345678');
		cy.get('#confirmPasswordRegister').type('12345678');

		cy.get('#registerBtn').click();

		cy.contains('Email already in use').should('be.visible');
	});

	it('Login with valid Login', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').type('teste@gmail.com');
		cy.get('input[name="password"]').type('12345678');
		cy.contains('Login').click();

		cy.contains('Bem-vindo!').should('be.visible');

		cy.contains('Bem-vindo à AppGenda').should('not.exist');
	});

	it('Try to access Editar Dados modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);
		cy.get('input[name="email"]').type('teste@gmail.com');
		cy.get('input[name="password"]').type('12345678');
		cy.contains('Login').click();

		cy.contains('Editar Meus Dados').click();
		cy.contains('Editar meus dados').should('be.visible');
	});

	it('Try to edit user data', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').type('teste@gmail.com');
		cy.get('input[name="password"]').type('12345678');
		cy.contains('Login').click();

		cy.contains('Editar Meus Dados').click();

		cy.get('#fullNameEdit').clear().type('Edicao Teste');
		cy.get('#emailEdit').clear().type('editado@gmail.com');
		cy.get('#mobilePhoneEdit').clear().type('41 99999 9999');
		cy.get('#phoneEdit').clear().type('41 9999 9999');

		cy.get('#editUserDataBtn').click();

		cy.contains('Dados atualizados com sucesso!').should('be.visible');
	});

	it('Try to access Novo contato modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').type('editado@gmail.com');
		cy.get('input[name="password"]').type('12345678');
		cy.contains('Login').click();

		cy.get('#contactAddModal').click();

		cy.contains('Dados do contato').should('be.visible');
	});

	it('Add contact', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.get('#contactAddModal').click();

		cy.get('#fullNameCreateContact').clear().type('Teste222');
		cy.get('#emailCreateContact').clear().type('testeAddContact@gmail.com');
		cy.get('#mobilePhoneCreateContact').clear().type('41 99999 9999');
		cy.get('#phoneCreateContact').clear().type('41 9999 9999');

		cy.contains('Adicionar').click();

		cy.contains('Teste222').should('be.visible');
		cy.contains('Contato adicionado com sucesso!').should('be.visible');
	});

	it('Open edit contact modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.get('.edit-contact-btn').click();

		cy.contains('Editar Contato').should('be.visible');
	});

	it('Edit contact', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.get('.edit-contact-btn').click();

		cy.get('#fullNameEditContact').clear().type('Fui Editado');
		cy.get('#emailEditContact').clear().type('editado@gmail.com');
		cy.get('#mobilePhoneEditContact').clear().type('41 88888 8888');
		cy.get('#phoneEditContact').clear().type('41 8888 8888');

		cy.get('.edit-contact').click();

		cy.contains('Fui Editado').should('be.visible');
		cy.contains('Dados atualizados com sucesso!').should('be.visible');
	});

	it('Open delete contact modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.contains('Deletar').click();

		cy.contains('Você realmente deseja excluir o usuário Fui Editado?').should(
			'be.visible'
		);
		cy.contains('Deletar Contato').should('be.visible');
	});

	it('Delete contact modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.contains('Deletar').click();

		cy.get('.delete-confirm').click();
		cy.contains('Contato excluído com sucesso!').should('be.visible');
		cy.contains('Fui Editado').should('not.exist');
	});

	it('Open excluir conta modal', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.contains('Excluir Conta').click();

		cy.contains('Você realmente deseja excluir sua conta').should('be.visible');
		cy.contains('Deletar Conta').should('be.visible');
	});

	it('Excluir conta', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.contains('Excluir Conta').click();

		cy.get('.user-delete').click();
		cy.contains('Usuário deleteado com sucesso!').should('be.visible');
		cy.contains('Bem-vindo à AppGenda').should('be.visible');
	});

	it('Trying to log in with deactivated account', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.get('input[name="email"]').clear().type('editado@gmail.com');
		cy.get('input[name="password"]').clear().type('12345678');
		cy.contains('Login').click();

		cy.contains('User is not active').should('be.visible');
	});
});
