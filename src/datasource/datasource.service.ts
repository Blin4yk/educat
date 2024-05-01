import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/author.entity';

@Injectable()
export class DatasourceService {
  private authors: Author[] = [];

  getAuthors(): Author[] {
    return this.authors;

  }
}
