interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'INSERIR ALGUM EMAIL QUE EU CADASTRAR NO DOMINIO',
      name: 'Yuri da GoBarber',
    },
  },
} as IMailConfig;
