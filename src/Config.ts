/**
 * Loads values from VS Code config. It is currently only read at extension launch,
 * but config change watchers can be added here if needed.
 */

import * as vscode from 'vscode';

const hackConfig = vscode.workspace.getConfiguration('hack');

export const clientPath: string = hackConfig.get('clientPath') || 'hh_client';
export const hhClientArgs: string[] = clientPath.split(' ');
export const hhClientCommand: string = String(hhClientArgs.shift());

export const workspace: string = hackConfig.get('workspaceRootPath') || vscode.workspace.rootPath || '';

let enableCoverageCheckConfig: boolean | undefined = hackConfig.get('enableConverageCheck');
if (enableCoverageCheckConfig === undefined) {
    enableCoverageCheckConfig = true;
}
export const enableCoverageCheck: boolean = enableCoverageCheckConfig;

let useLanguageServerConfig: boolean | undefined = hackConfig.get('useLanguageServer');
if (useLanguageServerConfig === undefined) {
    useLanguageServerConfig = true;
}
export const useLanguageServer: boolean = useLanguageServerConfig;
