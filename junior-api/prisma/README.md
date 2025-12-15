```markdown
# Prisma - instruções rápidas

Comandos úteis (rodar na raiz do projeto):

1. Inicializar (se ainda não fez):
   - npx prisma init

2. Criar migração de desenvolvimento e aplicar:
   - npx prisma migrate dev --name init
   - isso gera a pasta prisma/migrations e aplica no banco apontado por DATABASE_URL

3. Gerar client (sempre que mudar schema.prisma):
   - npx prisma generate

4. Rodar seed (configurar script no package.json, ver abaixo):
   - npx prisma db seed

5. Inspecionar o DB:
   - npx prisma studio

Recomendações:

- Adicionar .env (não commitar) com DATABASE_URL.
- Atualize seed.ts para dados de teste reais do seu ambiente.
- Versione mudanças do schema com migrações (prisma migrate).
```
