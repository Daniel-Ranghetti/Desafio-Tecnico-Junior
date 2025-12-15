import { PrismaClient, ClientType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Cliente pessoa física
  const clientePf = await prisma.client.upsert({
    where: { email: 'maria.pf@example.com' },
    update: {},
    create: {
      name: 'Maria da Silva',
      email: 'maria.pf@example.com',
      whatsapp: '+5511999887766',
      type: ClientType.CPF,
      cpf: '12345678909',
      addresses: {
        create: [
          {
            cep: '01001-000',
            rua: 'Praça da Sé',
            bairro: 'Sé',
            cidade: 'São Paulo',
            numero: '100',
            complemento: 'Apto 101',
          },
        ],
      },
    },
    include: { addresses: true },
  });

  // Cliente pessoa jurídica
  const clientePj = await prisma.client.upsert({
    where: { email: 'empresa@example.com' },
    update: {},
    create: {
      name: 'Empresa Exemplo LTDA',
      email: 'empresa@example.com',
      whatsapp: '+551132220000',
      type: ClientType.CNPJ,
      cnpj: '12345678000199',
      addresses: {
        create: [
          {
            cep: '20010-000',
            rua: 'Rua do Mercado',
            bairro: 'Centro',
            cidade: 'Rio de Janeiro',
            numero: '250',
            complemento: 'Sala 3',
          },
        ],
      },
    },
    include: { addresses: true },
  });

  console.log('Seed concluído:', {
    clientePf: clientePf.id,
    clientePj: clientePj.id,
  });
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
