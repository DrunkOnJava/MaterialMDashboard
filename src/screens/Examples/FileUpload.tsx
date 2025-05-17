import React, { useState, useCallback } from 'react';
import { SidebarByAnima } from '../Chip/sections/SidebarByAnima';
import { TopBarByAnima } from '../Chip/sections/TopBarByAnima';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { useToast } from '../../hooks/use-toast';
import {
  Upload,
  File,
  CheckCircle,
  Clock,
  AlertCircle,
  UploadCloud,
  FileText,
  Image as ImageIcon,
  FileArchive,
  File as FilePdf,
  FileCode,
  Download,
  Trash2,
  Eye,
} from 'lucide-react';

// Define file types
type FileStatus = 'uploading' | 'complete' | 'error' | 'pending';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: FileStatus;
  url?: string;
  error?: string;
}

// Helper function to format file size
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Helper function to get file icon based on file type
const getFileIcon = (fileType: string) => {
  if (fileType.startsWith('image/')) {
    return <ImageIcon className="h-6 w-6 text-light-themeprimaryblue" />;
  } else if (fileType === 'application/pdf') {
    return <FilePdf className="h-6 w-6 text-actionwarning" />;
  } else if (fileType.includes('zip') || fileType.includes('compressed')) {
    return <FileArchive className="h-6 w-6 text-light-themesecondarypurple" />;
  } else if (
    fileType.includes('html') ||
    fileType.includes('javascript') ||
    fileType.includes('css')
  ) {
    return <FileCode className="h-6 w-6 text-actionsuccess" />;
  } else {
    return <FileText className="h-6 w-6 text-blackblack-60" />;
  }
};

export const FileUpload = (): JSX.Element => {
  const { toast } = useToast();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  // Add files to the state and start upload simulation
  const addFiles = (newFiles: File[]) => {
    const filesToAdd: UploadedFile[] = newFiles.map(file => ({
      id: Math.random().toString(36).substring(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'pending',
    }));

    setFiles(prev => [...prev, ...filesToAdd]);

    // Simulate upload for each file
    filesToAdd.forEach(file => simulateFileUpload(file.id));

    toast({
      title: `${newFiles.length} file${newFiles.length > 1 ? 's' : ''} added`,
      description: 'Upload has started automatically',
      variant: 'default',
    });
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  // Handle drag events
  const handleDrag = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true);
      } else if (e.type === 'dragleave') {
        setDragActive(false);
      }
    },
    [setDragActive]
  );

  // Handle drop event
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        addFiles(Array.from(e.dataTransfer.files));
      }
    },
    [addFiles]
  );

  // Simulate file upload with progress
  const simulateFileUpload = (fileId: string) => {
    setFiles(prev =>
      prev.map(f => (f.id === fileId ? { ...f, status: 'uploading', progress: 0 } : f))
    );

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;

      if (progress >= 100) {
        clearInterval(interval);
        progress = 100;

        // Simulate random success/error (90% success rate)
        const isSuccess = Math.random() > 0.1;

        setFiles(prev =>
          prev.map(f =>
            f.id === fileId
              ? {
                  ...f,
                  progress,
                  status: isSuccess ? 'complete' : 'error',
                  url: isSuccess ? `https://example.com/files/${f.name}` : undefined,
                  error: isSuccess ? undefined : 'Failed to upload file. Server error.',
                }
              : f
          )
        );

        if (isSuccess) {
          toast({
            title: 'File uploaded successfully',
            description: `${files.find(f => f.id === fileId)?.name} has been uploaded.`,
            variant: 'default',
            icon: <CheckCircle className="h-4 w-4 text-actionsuccess" />,
          });
        } else {
          toast({
            title: 'Upload failed',
            description: `Failed to upload ${files.find(f => f.id === fileId)?.name}.`,
            variant: 'destructive',
            icon: <AlertCircle className="h-4 w-4" />,
          });
        }
      } else {
        setFiles(prev => prev.map(f => (f.id === fileId ? { ...f, progress } : f)));
      }
    }, 300);
  };

  // Remove file from the list
  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));

    toast({
      title: 'File removed',
      description: 'The file has been removed from the list.',
      variant: 'default',
    });
  };

  // Retry failed upload
  const retryUpload = (fileId: string) => {
    simulateFileUpload(fileId);

    toast({
      title: 'Retrying upload',
      description: `Retrying upload for ${files.find(f => f.id === fileId)?.name}.`,
      variant: 'default',
    });
  };

  // Get status badge for file
  const getStatusBadge = (status: FileStatus) => {
    switch (status) {
      case 'uploading':
        return (
          <Badge className="bg-light-themeprimarylight-blue text-light-themeprimaryblue">
            Uploading
          </Badge>
        );
      case 'complete':
        return <Badge className="bg-actionsuccess-light text-actionsuccess">Complete</Badge>;
      case 'error':
        return <Badge className="bg-actionwarning-light text-actionwarning">Failed</Badge>;
      case 'pending':
        return <Badge className="bg-blackblack-10 text-blackblack-60">Pending</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-surfaceslightgray-10 overflow-hidden">
      <SidebarByAnima />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBarByAnima />
        <TitlebarByAnima title="File Upload" />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  File Upload Component
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                      dragActive
                        ? 'border-light-themeprimaryblue bg-light-themeprimarylight-blue'
                        : 'border-[#111c2d1a]'
                    }`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <UploadCloud className="h-12 w-12 text-blackblack-40 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Drag and drop files here</h3>
                      <p className="text-blackblack-60 mb-4">or click to browse your files</p>
                      <Button variant="outline" className="relative">
                        <Upload className="mr-2 h-4 w-4" />
                        <span>Select Files</span>
                        <Input
                          type="file"
                          multiple
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleFileChange}
                        />
                      </Button>
                      <p className="text-xs text-blackblack-60 mt-4">
                        Supported formats: JPG, PNG, PDF, DOC, DOCX, XLS, XLSX, ZIP (Max 10MB)
                      </p>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-4">Uploaded Files ({files.length})</h3>
                      <div className="space-y-3">
                        {files.map(file => (
                          <div key={file.id} className="border rounded-lg p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0">{getFileIcon(file.type)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <p className="font-medium text-blackblack-100 truncate">
                                      {file.name}
                                    </p>
                                    {getStatusBadge(file.status)}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {file.status === 'complete' && (
                                      <>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                          <Eye className="h-4 w-4 text-blackblack-60" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                          <Download className="h-4 w-4 text-blackblack-60" />
                                        </Button>
                                      </>
                                    )}
                                    {file.status === 'error' && (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => retryUpload(file.id)}
                                        className="h-8"
                                      >
                                        <Clock className="mr-1 h-4 w-4" />
                                        Retry
                                      </Button>
                                    )}
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-actionwarning"
                                      onClick={() => removeFile(file.id)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <p className="text-xs text-blackblack-60">
                                    {formatFileSize(file.size)}
                                  </p>
                                  {file.status === 'uploading' && (
                                    <p className="text-xs text-blackblack-60">{file.progress}%</p>
                                  )}
                                </div>
                                {file.status === 'uploading' && (
                                  <div className="mt-2">
                                    <Progress value={file.progress} max={100} />
                                  </div>
                                )}
                                {file.status === 'error' && file.error && (
                                  <p className="text-xs text-actionwarning mt-1">{file.error}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between mt-4">
                        <Button
                          variant="outline"
                          className="text-actionwarning"
                          onClick={() => setFiles([])}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Clear All
                        </Button>

                        <Button variant="primary">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Complete Upload
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">File Upload Component Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Define file types
interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: "uploading" | "complete" | "error" | "pending";
  url?: string;
  error?: string;
}

// State for files
const [files, setFiles] = useState<UploadedFile[]>([]);
const [dragActive, setDragActive] = useState(false);

// Handle file selection
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    addFiles(Array.from(e.target.files));
  }
};

// Handle drag events
const handleDrag = useCallback((e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  
  if (e.type === "dragenter" || e.type === "dragover") {
    setDragActive(true);
  } else if (e.type === "dragleave") {
    setDragActive(false);
  }
}, [setDragActive]);

// Handle drop event
const handleDrop = useCallback((e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  setDragActive(false);
  
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    addFiles(Array.from(e.dataTransfer.files));
  }
}, [addFiles]);

// Add files to the state and start upload simulation
const addFiles = (newFiles: File[]) => {
  const filesToAdd: UploadedFile[] = newFiles.map(file => ({
    id: Math.random().toString(36).substring(2, 9),
    name: file.name,
    size: file.size,
    type: file.type,
    progress: 0,
    status: "pending"
  }));
  
  setFiles(prev => [...prev, ...filesToAdd]);
  
  // Simulate upload for each file
  filesToAdd.forEach(file => {
    simulateFileUpload(file.id);
  });
};

// Simulate file upload with progress
const simulateFileUpload = (fileId: string) => {
  setFiles(prev => prev.map(f => 
    f.id === fileId ? { ...f, status: "uploading", progress: 0 } : f
  ));
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 1;
    
    if (progress >= 100) {
      clearInterval(interval);
      progress = 100;
      
      // Simulate random success/error
      const isSuccess = Math.random() > 0.1;
      
      setFiles(prev => prev.map(f => 
        f.id === fileId 
          ? { 
              ...f, 
              progress, 
              status: isSuccess ? "complete" : "error",
              url: isSuccess ? \`https://example.com/files/\${f.name}\` : undefined,
              error: isSuccess ? undefined : "Failed to upload file. Server error."
            } 
          : f
      ));
    } else {
      setFiles(prev => prev.map(f => 
        f.id === fileId ? { ...f, progress } : f
      ));
    }
  }, 300);
};`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Drag and Drop Area Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`<div 
  className={\`border-2 border-dashed rounded-lg p-8 text-center \${
    dragActive 
      ? 'border-light-themeprimaryblue bg-light-themeprimarylight-blue' 
      : 'border-[#111c2d1a]'
  }\`}
  onDragEnter={handleDrag}
  onDragOver={handleDrag}
  onDragLeave={handleDrag}
  onDrop={handleDrop}
>
  <div className="flex flex-col items-center justify-center">
    <UploadCloud className="h-12 w-12 text-blackblack-40 mb-4" />
    <h3 className="text-lg font-medium mb-2">Drag and drop files here</h3>
    <p className="text-blackblack-60 mb-4">or click to browse your files</p>
    <Button variant="outline" className="relative">
      <Upload className="mr-2 h-4 w-4" />
      <span>Select Files</span>
      <Input
        type="file"
        multiple
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleFileChange}
      />
    </Button>
    <p className="text-xs text-blackblack-60 mt-4">
      Supported formats: JPG, PNG, PDF, DOC, DOCX, XLS, XLSX, ZIP (Max 10MB)
    </p>
  </div>
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">
                    File Item with Progress Bar Code Example
                  </h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`<div key={file.id} className="border rounded-lg p-4">
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0">
      {getFileIcon(file.type)}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-medium text-blackblack-100 truncate">{file.name}</p>
          {getStatusBadge(file.status)}
        </div>
        <div className="flex items-center gap-2">
          {file.status === "complete" && (
            <>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Eye className="h-4 w-4 text-blackblack-60" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4 text-blackblack-60" />
              </Button>
            </>
          )}
          {file.status === "error" && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => retryUpload(file.id)}
              className="h-8"
            >
              <Clock className="mr-1 h-4 w-4" />
              Retry
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-actionwarning"
            onClick={() => removeFile(file.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <p className="text-xs text-blackblack-60">{formatFileSize(file.size)}</p>
        {file.status === "uploading" && (
          <p className="text-xs text-blackblack-60">{file.progress}%</p>
        )}
      </div>
      {file.status === "uploading" && (
        <div className="mt-2">
          <Progress value={file.progress} max={100} />
        </div>
      )}
      {file.status === "error" && file.error && (
        <p className="text-xs text-actionwarning mt-1">{file.error}</p>
      )}
    </div>
  </div>
</div>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
