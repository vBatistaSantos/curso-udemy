/* ----------------------------------------------------------------------------

Exercício: 024
Enunciado:
    Existem 8 checkboxes referentes a um conjunto de permissões de usuário.
    Cada uma delas pode ser checkada individualmente.
    Por baixo, existe um select com 3 perfis de usuário: administrador, coordenador
    e operador.
    Ao selecionar um perfil, as checkboxes devem ser checkadas de acordo com o
    perfil selecionado.

    Administrador: 
        Todas as permissões

    Coordenador: 
        Coordenação dos trabalhos
        Gestão de calendário
        Utilização das máquinas
        Utilização das ferramentas

    Operador:
        Utilização das máquinas
        Utilização das ferramentas

    NOTA: sem perfil, todas as checkboxes devem estar descheckadas.

---------------------------------------------------------------------------- */
const checkboxes = document.querySelectorAll('[type="checkbox"]');
const selecao = document.querySelector('select');
let permissoes = [];

selecao.addEventListener('input',()=>{
    let opcao = selecao.value;
    limpar_checkboxes(checkboxes);
    checkboxes.forEach(checkbox=>{
        switch(opcao){
            case 'administrador':
                checkbox.checked = true;
                break;
            
            case 'coordenador':
                permissoes = ['check_5','check_6','check_7','check_8'];
                if(permissoes.includes(checkbox.id)){
                    checkbox.checked = true;
                }
                break;
                
            case 'operador':
                permissoes = ['check_7','check_8'];
                if(permissoes.includes(checkbox.id)){
                    checkbox.checked = true;
                }
                break;

            default:
        }
    })
})

function limpar_checkboxes(checkboxes){
    checkboxes.forEach(checkbox=>{
        checkbox.checked = false;
    })
}