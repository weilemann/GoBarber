import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailProviderTemplate';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parsetemplate = handlebars.compile(template);

    return parsetemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
