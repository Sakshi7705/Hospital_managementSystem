USE [master]
GO
/****** Object:  Database [HMS1]    Script Date: 21/6/2023 09:11:24 AM ******/
CREATE DATABASE [HMS1]
CONTAINMENT = NONE
  ON  PRIMARY 
    ( NAME = N'HMS1', FILENAME = N'E:\sql server\MSSQL11.MSSQLSERVER\MSSQL\DATA\HMS1.mdf' , SIZE = 3136KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB ) 
    LOG ON ( NAME = N'HMS1_log', FILENAME = N'E:\sql server\MSSQL11.MSSQLSERVER\MSSQL\DATA\HMS1_log.ldf' , SIZE = 784KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
      GO
      ALTER DATABASE [HMS1] SET COMPATIBILITY_LEVEL = 110
        GO
          IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
            begin
              EXEC [HMS1].[dbo].[sp_fulltext_database] @action = 'enable'
                end
                  GO
                    ALTER DATABASE [HMS1] SET ANSI_NULL_DEFAULT OFF 
                      GO
                        ALTER DATABASE [HMS1] SET ANSI_NULLS OFF 
                          GO
                            ALTER DATABASE [HMS1] SET ANSI_PADDING OFF 
                              GO
                                ALTER DATABASE [HMS1] SET ANSI_WARNINGS OFF 
                                  GO
                                    ALTER DATABASE [HMS1] SET ARITHABORT OFF 
                                      GO
                                        ALTER DATABASE [HMS1] SET AUTO_CLOSE OFF
                                          GO
                                            ALTER DATABASE [HMS1] SET AUTO_CREATE_STATISTICS ON 
                                              GO
                                                ALTER DATABASE [HMS1] SET AUTO_SHRINK OFF 
                                                  GO
ALTER DATABASE [HMS1] SET AUTO_UPDATE_STATISTICS ON 
  GO
    ALTER DATABASE [HMS1] SET CURSOR_CLOSE_ON_COMMIT OFF 
      GO 
        ALTER DATABASE [HMS1] SET CURSOR_DEFAULT  GLOBAL 
          GO
            ALTER DATABASE [HMS1] SET CONCAT_NULL_YIELDS_NULL OFF 
              GO
                ALTER DATABASE [HMS1] SET NUMERIC_ROUNDABORT OFF 
                  GO
                    ALTER DATABASE [HMS1] SET QUOTED_IDENTIFIER OFF 
                      GO
                        ALTER DATABASE [HMS1] SET RECURSIVE_TRIGGERS OFF 
                          GO
                            ALTER DATABASE [HMS1] SET  ENABLE_BROKER 
                              GO
                                ALTER DATABASE [HMS1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
                                  GO
                                    ALTER DATABASE [HMS1] SET DATE_CORRELATION_OPTIMIZATION OFF
                                      GO
                                        ALTER DATABASE [HMS1] SET TRUSTWORTHY OFF 
                                          GO
                                            ALTER DATABASE [HMS1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
                                              GO
                                                ALTER DATABASE [HMS1] SET PARAMETERIZATION SIMPLE 
                                                  GO
                                                    ALTER DATABASE [HMS1] SET READ_COMMITTED_SNAPSHOT OFF 
                                                      GO
                                                        ALTER DATABASE [HMS1] SET HONOR_BROKER_PRIORITY OFF 
                                                          GO
                                                            ALTER DATABASE [HMS1] SET RECOVERY FULL 
                                                              GO
                                                                ALTER DATABASE [HMS1] SET  MULTI_USER 
                                                                  GO
                                                                    ALTER DATABASE [HMS1] SET PAGE_VERIFY CHECKSUM 
                                                                      GO
                                                                        ALTER DATABASE [HMS1] SET DB_CHAINING OFF 
                                                                          GO
ALTER DATABASE [HMS1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
  GO
    ALTER DATABASE [HMS1] SET TARGET_RECOVERY_TIME = 0 SECONDS 
      GO
        ALTER DATABASE [HMS1] SET  READ_WRITE 
         GO
