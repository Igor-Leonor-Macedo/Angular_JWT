import {Component, OnInit, ViewChild} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatPaginator} from '@angular/material/paginator';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatIconButton} from '@angular/material/button';
import {MatSort} from '@angular/material/sort';
import {DatePipe, NgClass, TitleCasePipe} from '@angular/common';

// Interface para definir a estrutura dos dados
export interface TableData {
  id: number;
  nome: string;
  email: string;
  status: 'ativo' | 'inativo' | 'pendente';
  data: Date;
}

@Component({
  selector: 'app-alert',
  imports: [
    MatToolbar,
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    FormsModule,
    MatCardContent,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatFormField,
    MatLabel,
    MatIcon,
    MatPaginator,
    MatSelect,
    MatOption,
    MatInput,
    MatIconButton,
    MatHeaderRow,
    MatRow,
    MatNoDataRow,
    MatHeaderRowDef,
    TitleCasePipe,
    DatePipe,
    NgClass,
    MatRowDef,
    RouterLinkActive,
  ],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class AlertComponent implements OnInit {

  // Colunas que serão exibidas na tabela
  displayedColumns: string[] = ['id', 'nome', 'email', 'status', 'data', 'acoes'];

  // DataSource para a tabela
  dataSource = new MatTableDataSource<TableData>();

  // ViewChild para acessar a paginação e ordenação
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    // Conecta a paginação e ordenação com o dataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Método para carregar os dados (substitua pela sua lógica de dados)
  loadData(): void {
    // Dados de exemplo - substitua pela chamada ao seu serviço/API
    const dadosExemplo: TableData[] = [
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        status: 'ativo',
        data: new Date('2024-01-15')
      },
      {
        id: 2,
        nome: 'Maria Santos',
        email: 'maria.santos@email.com',
        status: 'pendente',
        data: new Date('2024-02-20')
      },
      {
        id: 3,
        nome: 'Pedro Oliveira',
        email: 'pedro.oliveira@email.com',
        status: 'inativo',
        data: new Date('2024-01-10')
      },
      {
        id: 4,
        nome: 'Ana Costa',
        email: 'ana.costa@email.com',
        status: 'ativo',
        data: new Date('2024-03-05')
      },
      {
        id: 5,
        nome: 'Carlos Mendes',
        email: 'carlos.mendes@email.com',
        status: 'ativo',
        data: new Date('2024-02-28')
      },
      {
        id: 6,
        nome: 'Lucia Ferreira',
        email: 'lucia.ferreira@email.com',
        status: 'pendente',
        data: new Date('2024-03-12')
      },
      {
        id: 7,
        nome: 'Roberto Lima',
        email: 'roberto.lima@email.com',
        status: 'inativo',
        data: new Date('2024-01-22')
      },
      {
        id: 8,
        nome: 'Fernanda Rocha',
        email: 'fernanda.rocha@email.com',
        status: 'ativo',
        data: new Date('2024-03-18')
      }
    ];

    this.dataSource.data = dadosExemplo;
  }

  // Método para aplicar filtro na tabela
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // Métodos para as ações da tabela
  editar(element: TableData): void {
    console.log('Editando:', element);
    // Implementar lógica de edição
    // Por exemplo: this.router.navigate(['/editar', element.id]);
  }
  excluir(element: TableData): void {
    console.log('Excluindo:', element);
    // Implementar lógica de exclusão
    // Exemplo com confirmação:
    if (confirm(`Deseja realmente excluir ${element.nome}?`)) {
      const index = this.dataSource.data.indexOf(element);
      if (index > -1) {
        const newData = [...this.dataSource.data];
        newData.splice(index, 1);
        this.dataSource.data = newData;
      }
    }
  }
  visualizar(element: TableData): void {
    console.log('Visualizando:', element);
    // Implementar lógica de visualização
    // Por exemplo: this.router.navigate(['/visualizar', element.id]);
  }

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
