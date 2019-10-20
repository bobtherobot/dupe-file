/*
--------------
Dupe File
--------------
By Mike Gieson (www.gieson.com)

Special thanks to:
Dennis Malinochkin (mrmlnc.com)

*/


"use strict";

var vscode = require("vscode");
var myfs = require("myfs");

function dupe(uri, settings) {

	var newPath = myfs.dupe(uri.path);

    if(settings.openFileAfterCopy) {

        setTimeout(function(){

            var openPath = vscode.Uri.file(newPath);
                vscode.workspace.openTextDocument(openPath).then(doc => {
                vscode.window.showTextDocument(doc);
            });
    
        }, 500); // gaylord timer, cheap and easy.

    }
    
}

function activate(context) {
    var command = vscode.commands.registerCommand('dupe.execute', function (uri) {

        var settings = vscode.workspace.getConfiguration().get('dupe');
        if (!uri || !uri.fsPath) {
            var editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }
            return dupe(editor.document.uri, settings);
        }
        return dupe(uri, settings);
    });
    context.subscriptions.push(command);
}

exports.activate = activate;
