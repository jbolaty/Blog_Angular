# Blog_Angular
Le but de ce projet est de réaliser un blog avec le framework Angular. Ce test a été proposé au cours de ma formation sur le framework avec openclassrooms. 

# Enoncé du test 
Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "don't love it".  Chaque post aura la forme suivante : 

post: {
  title: string,
  content: string,
  loveIts: number,
  created_at: Date
} 

Quand un post a plus de "love it" que de "don't love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts est inférieur à 0, il sera coloré en rouge.

 Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.

 En termes de structure :

    votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent
    votre PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu
    chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template
    les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent

