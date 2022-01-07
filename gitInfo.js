/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a local cloud for coding projects, to which you can save instances of your code to pull from in case you encounter an error in your code that is unsalvagable. It creates version histories for your code with whatever message you want to remind yourself which version is which."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a public platform which, much like git, acts like a cloud for coding projects. The difference between Github and Git being that GitHub not only allows you to save your projects to the domain, but other people can also view, and even edit your files. It is an extremely useful tool whenever you are working with a team on a project."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "The git init command initializes whichever directory you use it on into the git cloud, creating a space in that directory to save your data to."
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
var gitCloneDefinition = "The git clone command allows you to create a copy of an existing repository in a new directory, in a different place in your files."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "The git status command allows you to see what in your current directory has been uploaded into git, what changes haven't been saved yet, and which files are not being tracked by git currently."
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "The git add command adds files in your git initialized directory into the git cloud."
let gitAddCode = "git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "The git commit command creates a snapshot of the files you've added to git. This snapshot is something that you can return to in case your code gets unmanageable and you have to return to a previous version."
let gitCommitCode = "git commit -m 'initial commit'"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "The git push command is what allows us to send our code to external repositories like GitHub."