import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'console' | 'game';
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'PlayStation 5',
      description: 'O mais recente console PlayStation com recursos avançados para jogos.',
      price: 2999,
      image: 'https://images.kabum.com.br/produtos/fotos/238671/console-sony-playstation-5_1634132556_g.jpg',
      type: 'console',
      tags: ['playstation', 'console', 'gaming']
    },
    {
      id: 2,
      name: 'Xbox Series X',
      description: 'Console poderoso da Microsoft para experiências imersivas de jogo.',
      price: 2999,
      image: 'https://images.tcdn.com.br/img/img_prod/993382/console_xbox_series_x_1tb_2_controles_pretos_473_1_6d80e52b7bf8e12985fe0371faf6cd19.jpg',
      type: 'console',
      tags: ['xbox', 'console', 'gaming']
    },
    {
      id: 3,
      name: 'Nintendo Switch',
      description: 'Console híbrido que pode ser usado tanto como console doméstico quanto dispositivo portátil.',
      price: 1999,
      image: 'https://m.media-amazon.com/images/I/61-HKEUNy-L.jpg',
      type: 'console',
      tags: ['nintendo', 'console', 'gaming']
    },
    {
      id: 4,
      name: 'PlayStation 4 Pro',
      description: 'Versão aprimorada do PlayStation 4 para jogos e entretenimento em 4K.',
      price: 2499,
      image: 'https://i.zst.com.br/thumbs/12/16/1c/145727464.jpg',
      type: 'console',
      tags: ['playstation', 'console', 'gaming']
    },
    {
      id: 5,
      name: 'Xbox One X',
      description: 'Modelo de alto desempenho do Xbox One com capacidades de jogo em 4K.',
      price: 2999,
      image: 'https://http2.mlstatic.com/D_NQ_NP_801006-MLU72573463914_112023-O.webp',
      type: 'console',
      tags: ['xbox', 'console', 'gaming']
    },
    {
      id: 6,
      name: 'Nintendo Switch Lite',
      description: 'Versão compacta e leve do Nintendo Switch, projetada para jogos portáteis.',
      price: 1499,
      image: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/275671/Console-Nintendo-Switch-Lite-32GB-Turquesa_1706108285_gg.jpg',
      type: 'console',
      tags: ['nintendo', 'console', 'gaming']
    },
    {
      id: 7,
      name: 'PlayStation VR',
      description: 'Headset de realidade virtual para PlayStation, oferecendo experiências imersivas de jogo em VR.',
      price: 1999,
      image: 'https://a-static.mlcdn.com.br/450x450/playstation-vr2-branco-e-preto-1000032476-sony/kabum/403847/38c0464ea57a6a6641f53967c4777300.jpeg',
      type: 'console',
      tags: ['playstation', 'console', 'gaming']
    },
    {
      id: 8,
      name: 'Xbox Series S',
      description: 'Console de jogos totalmente digital da Microsoft, focado em downloads digitais e streaming.',
      price: 149.99,
      image: 'https://m.media-amazon.com/images/I/51pNvD-nsvL._AC_UF1000,1000_QL80_.jpg',
      type: 'console',
      tags: ['playstation', 'console', 'gaming']
    },
    {
      id: 9,
      name: 'The Legend of Zelda: Tears of The Kingdom',
      description: 'Um dos jogos de aventura mais aclamados da Nintendo.',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/81eHh0BNU0L._AC_UF1000,1000_QL80_.jpg',
      type: 'game',
      tags: ['nintendo', 'game', 'adventure']
    },
    {
      id: 10,
      name: 'The Last of Us Part II',
      description: 'Jogo de ação e aventura da Naughty Dog exclusivo para PlayStation.',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/81OFTUvFX4L._AC_UF1000,1000_QL80_.jpg',
      type: 'game',
      tags: ['playstation', 'game', 'action']
    },
    {
      id: 11,
      name: 'The Legend of Zelda: Echoes of Wisdom',
      description: 'Novo game da franquia de Zelda que será lançado em breve',
      price: 299,
      image: 'https://www.jbhifi.com.au/cdn/shop/files/754526-Product-0-I-638543436005807064.jpg?v=1718746870',
      type: 'game',
      tags: ['nintendo', 'game', 'adventure']
    },
    {
      id: 12,
      name: 'Animal Crossing: New Horizons',
      description: 'Descrição: Jogo de simulação de vida popular da Nintendo.',
      price: 249,
      image: 'https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg',
      type: 'game',
      tags: ['nintendo', 'game', 'simulation']
    },
    {
      id: 13,
      name: 'God of War',
      description: 'Aclamado jogo de ação e aventura baseado na mitologia nórdica.',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/81h0oxLQQPL._AC_UF1000,1000_QL80_.jpg',
      type: 'game',
      tags: ['playstation', 'game', 'action']
    },
    {
      id: 14,
      name: 'Forza Horizon 5',
      description: 'Jogo de corrida de mundo aberto da Microsoft.',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/81qP37GQSEL._AC_UF894,1000_QL80_.jpg',
      type: 'game',
      tags: ['xbox', 'game', 'racing']
    },
    {
      id: 15,
      name: 'Life is Strange: True Colors',
      description: 'Um jogo de aventura narrativa que segue a história de Alex Chen, uma jovem com a habilidade de experimentar, absorver e manipular as emoções fortes dos outros.',
      price: 249,
      image: 'https://images.uncyc.org/pt/f/f5/Life_Is_Strange_True_Colors_cover.png',
      type: 'game',
      tags: ['playstation', 'game', 'adventure', 'narrative']
    },
    {
      id: 16,
      name: 'Spider-Man: Miles Morales',
      description: 'Jogo de ação e aventura com o personagem Miles Morales.',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/81FBIrIvLVL._AC_UF1000,1000_QL80_.jpg',
      type: 'game',
      tags: ['playstation', 'game', 'action']
    },
    {
      id: 17,
      name: 'Super Mario Odyssey',
      description: 'Jogo de plataforma 3D com Mario viajando por diversos mundos.',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/91SF0Tzmv4L.jpg',
      type: 'game',
      tags: ['nintendo', 'game', 'platformer']
    }
  ];

  searchControl = new FormControl();
  filteredOptions: Observable<Product[]>;
  filteredConsoleProducts: Product[] = [];
  filteredGameProducts: Product[] = [];

  constructor() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value ?? ''))
    );
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();
    this.filteredConsoleProducts = this.products.filter(product =>
      product.type === 'console' && product.name.toLowerCase().includes(filterValue)
    );
    this.filteredGameProducts = this.products.filter(product =>
      product.type === 'game' && product.name.toLowerCase().includes(filterValue)
    );
    return this.products.filter(product => product.name.toLowerCase().includes(filterValue));
  }

  searchProducts(query: string): Product[] {
    query = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query)) ||
      product.type.toLowerCase().includes(query)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
