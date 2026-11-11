# Documentação de Fluxo de Trabalho (Git Workflow)

Este documento descreve a estratégia de branching adotada para o projeto **William Enfermeiro**, seguindo padrões de engenharia de software profissional.

## 🌿 Estrutura de Branches

### 1. `main`
**O que é:** A branch de produção.
**Significado:** Contém apenas código estável, testado e pronto para o usuário final. Nada é commitado diretamente aqui; as alterações chegam via merge da `develop`.
**Objetivo:** Garantir que o site no ar nunca esteja "quebrado".

### 2. `develop`
**O que é:** A branch de integração.
**Significado:** É o "estágio" onde todas as novas funcionalidades e correções são reunidas e testadas antes de irem para a `main`.
**Objetivo:** Servir como fonte de verdade para o desenvolvimento atual.

### 3. `fix/` (Ex: `fix/repo-structure`, `fix/placeholders-content`)
**O que é:** Branches de correção.
**Significado:** Utilizadas para corrigir bugs, erros de digitação, problemas de layout ou preencher placeholders. São branches curtas: cria-se, corrige-se e deleta-se após o merge na `develop`.
**Objetivo:** Isolar correções para não afetar outras partes do sistema.

### 4. `feature/` (Ex: `feature/seo-optimization`)
**O que é:** Branches de funcionalidade/melhoria.
**Significado:** Utilizadas para adicionar algo novo ou otimizar algo existente (como SEO, novas seções ou scripts).
**Objetivo:** Desenvolver melhorias complexas sem instabilizar a branch de integração.

---

## 🤖 Prompts de Manutenção (Guia para IA)

Se você for utilizar outra IA para dar continuidade a este projeto, utilize os prompts abaixo dependendo da branch onde estiver trabalhando:

### Para a branch `fix/` (Correções Rápidas)
> "Atue como um Desenvolvedor Frontend. Estou na branch `fix/`. Analise o arquivo [NOME DO ARQUIVO] e identifique erros de digitação, placeholders não preenchidos ou bugs visuais. Implemente a correção mantendo a semântica do HTML e a consistência do CSS. Após a alteração, realize o commit com a mensagem 'fix: descrição da correção'."

### Para a branch `feature/` (Novas Implementações)
> "Atue como um Arquiteto de Software. Estou na branch `feature/`. Preciso implementar a funcionalidade [DESCREVER FUNCIONALIDADE]. Analise a arquitetura atual, garanta que a nova implementação seja responsiva, acessível (WCAG) e não quebre as funcionalidades existentes. Siga o padrão de commits 'feature: descrição da melhoria'."

### Para a branch `develop` (Integração e Testes)
> "Atue como um Engenheiro de QA. Estou na branch `develop`. Acabei de realizar o merge de branches de fix/feature. Verifique a integridade de todos os links, a responsividade em diferentes resoluções e a performance de carregamento. Documente qualquer regressão encontrada."

### Para a branch `main` (Release/Produção)
> "Atue como um DevOps Engineer. O código na `develop` foi validado. Prepare o merge para a `main` criando uma tag de versão (ex: v1.0.0). Certifique-se de que todas as variáveis de ambiente e URLs de produção estejam configuradas corretamente."
